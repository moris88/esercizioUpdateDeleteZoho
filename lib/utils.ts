
namespace Utils {

    export function getDataWithSlash(dataString: string) {
        if (dataString === '') return dataString
        const newData = new Date(dataString)
        const anni = newData.getFullYear()
        const mesi =
          newData.getMonth() + 1 < 10
            ? '0' + (newData.getMonth() + 1)
            : newData.getMonth() + 1
        const giorni =
          newData.getDate() < 10 ? '0' + newData.getDate() : newData.getDate()
        return `${giorni}/${mesi}/${anni}`
    }

    export function getDataWithTrattini(dataString: string) {
        if (dataString === '') return dataString
        const newData = new Date(dataString)
        const anni = newData.getFullYear()
        const mesi =
        newData.getMonth() + 1 < 10 ? '0' + (newData.getMonth() + 1) : newData.getMonth() + 1
        const giorni = newData.getDate() < 10 ? '0' + newData.getDate() : newData.getDate()
        return anni + '-' + mesi + '-' + giorni
    }

    export function getHrs(dataString: string) {
        if (dataString === '') return dataString
        const newData = new Date(dataString)
        const ore =
          newData.getHours() < 10 ? '0' + newData.getHours() : newData.getHours()
        const minuti =
          newData.getMinutes() < 10
            ? '0' + newData.getMinutes()
            : newData.getMinutes()
        return ore + ':' + minuti
    }

    export function convertStringToData(dataString: string) {
        return new Date(dataString)
    }

    export function convertDataToString(data: Date) {
        return new Date(data).toISOString()
    }

    export function subtractDays(date: Date, days: number) {
        let newDate = new Date(date.toISOString())
        newDate.setDate(date.getDate() - days)
        return newDate
    }

    export function addDays(date: Date, days: number) {
        let newDate = new Date(date.toISOString())
        newDate.setDate(date.getDate() + days)
        return newDate
    }

    export function order(array: any[]) {
        return array.sort(
          (a, b) =>
            a.eta - b.eta //cambiare eta con campo da ordinare
        )
    }
}

export default Utils