import './App.css'
import React from 'react'
import { EmbeddedAppData } from '../lib/ZDK'
import Zoho from '../lib/zoho' 
import { Leads } from './types/leads'

interface AppProps {
  data: EmbeddedAppData
}

const App: React.VFC<AppProps> = (props) => {

  const [leads, setLeads] = React.useState<Leads>()
  const [first_name, setFirstName] = React.useState<string>()
  const [last_name, setLastName] = React.useState<string>()
  const [urlDelete, setUrlDelete] = React.useState<string>()

  const getRecord = React.useCallback(async () => {
    console.log('getRecord')
    const record: Leads = await Zoho.getRecord<Leads>(props.data.Entity, props.data.EntityId)
    setLeads(record)
    //console.table(record)
  }, [props.data.Entity, props.data.EntityId])
  
  const updateRecord = React.useCallback(async () => {
    console.log('updateRecord')
    const data = {
      id: props.data.EntityId,
      First_Name: first_name,
      Last_Name: last_name,
    } 
    console.log(data)
    await Zoho.updateRecord(props.data.Entity, props.data.EntityId, data, '')
  }, [props.data.Entity, props.data.EntityId, first_name, last_name])

  const deleteRecord = React.useCallback(async () => {
    console.log('deleteRecord')
    
    if(window.confirm('Sei sicuro di cancellare?')){
      await Zoho.deleteRecord(props.data.Entity, props.data.EntityId)
      window.alert('Record Cancellato')
      const url = "https://crm.zoho.com/crm/org715054310/tab/Contacts/custom-view/4503385000000087529/list?page=1"
      Zoho.getFunctions({url: url})
      setUrlDelete(url)
    }
  }, [props.data.Entity, props.data.EntityId])

  const handleSetFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFirstName(event.target.value)
  }

  const handleSetLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setLastName(event.target.value)
  }

  return (
    <div className="App">
      <p>{props.data.Entity} {props.data.EntityId}</p>
      <label htmlFor="input_first_name">Inserisci Nome</label>
      <input name={'input_first_name'} type={'text'} value={first_name} onChange={(event) => handleSetFirstName(event)}/>
      <label htmlFor="input_last_name">Inserisci Cognome</label>
      <input name={'input_last_name'} type={'text'} value={last_name} onChange={(event) => handleSetLastName(event)}/>
      <button onClick={() => updateRecord()}>UpdateRecord</button>



      <button onClick={() => getRecord()}>GetRecord</button>
      {leads && (<p>{JSON.stringify(leads)}</p>)}
      
      {
        !urlDelete && (
          <button className={'coloreRosso'} onClick={() => deleteRecord()}>DeleteRecord</button>
        )
      }

      <button onClick={() => Zoho.reloadWidget()}>Reload Widget</button>
    </div>
  )
}

export default App
