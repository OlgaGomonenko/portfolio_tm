import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

class AllTms {
    arrTms: any[] = [];
    

    constructor() {
        makeAutoObservable(this);
    } 

    async getInfoTms() {
        try {
            const response = await axios.get('/custom_web_template.html?object_code=get_info_tms');
            runInAction(() => {
                    this.arrTms = response.data;
                    console.log(this.arrTms);
                }
            )
        } catch (error) {
            console.error('Ошибка получения каналов пользователя: ', error);
        }
    }
    
}


const allTmsInstance = new AllTms();
allTmsInstance.getInfoTms(); // Вызываем метод getInfoTms для получения данных

export default allTmsInstance;
