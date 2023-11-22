import { Paths } from "./paths";

const pageLocationRegister = new Map([
    [Paths.doctorScreen, 1],
    [Paths.ServiceExecutionPage, 2],
    [Paths.SurgeryExecutionPage, 3],
    [Paths.ReceivePatient, 4],
])
export const locationByPageDic = {};
export function initLocationByPageDic(dict){
    Object.keys(dict).forEach(k => {
        locationByPageDic[k] = dict[k];
    })
}
export default pageLocationRegister;