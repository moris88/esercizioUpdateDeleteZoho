import { ResponseRecords, Trigger } from './ZDK.d';

namespace Zoho {
    const { ZOHO } = window
    const connection = 'thiscrm'
    
    export async function getRecord<K>(module: string, id: string) {
        const response: ResponseRecords = await ZOHO.CRM.API.getRecord({
            Entity: module, 
            RecordID: id
        })
        return response.data[0] as K
    }

    export async function updateRecord(module: string, id: string, data: any, trigger: Trigger) {
        return await ZOHO.CRM.API.updateRecord({
            Entity: module, 
            RecordID: id,
            APIData: data,
            Trigger: [trigger]
        })
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
    }

    export async function deleteRecord(module: string, id: string) {
        return await ZOHO.CRM.API.deleteRecord({
            Entity: module, 
            RecordID: id,
        })
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
    }

    export async function getFunctions(argomenti: any) {
        const func_name = "openUrl";
        const req_data = {
            "arguments": JSON.stringify(argomenti)
        };
        ZOHO.CRM.FUNCTIONS.execute(func_name, req_data)
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
    }

    export async function invoke(
        module: string, 
        id: string, 
        data: any = {}, 
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        connection: string
    ) {
        let req_data = {
            "parameters" : { "data": [data]},
            "headers": {
                "Content-Type": "application/json"
            },
            "method" : method,
            "url" : `https://www.zohoapis.com/crm/v2/${module}/${id}`,
            "param_type" : 2
        }
        await ZOHO.CRM.CONNECTION.invoke(connection, req_data)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
    }

    export async function querySearch(
        module: string,  
        fields: string,
        query: string, 
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        connection: string
    ) {
        const req_data = {
          method: method,
          url: 'https://www.zohoapis.eu/crm/v2/coql',
          headers: { 'Content-Type': 'application/json' },
          parameters: {
            select_query: `select ${fields} from ${module} where ${query}`,
          },
        }
        return await ZOHO.CRM.CONNECTION.invoke(connection, req_data)
    }

    export function reloadParent(module: string, id: string) {
        ZOHO.CRM.UI.Record.open({
          Entity: module,
          RecordID: id,
        }).then((data: boolean) => {
          console.log('reload', data)
        })
    }

    export function reloadWidget() {
        window.location.reload()
    }
}
export default Zoho
