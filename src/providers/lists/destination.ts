import { Injectable } from '@angular/core';
@Injectable()
// export class DestinationList {
//     public destination_list: any = ["Johannesburg  JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR"];
// }

export class DestinationList {
    public destination_list: any =
        {
            "Durban": [
                ["Cape Town", 9909, 9909],
                ["Johannesburg", 9909]
            ],
            "Cape Town": [
                ["Durban", 9909],
                ["Johannesburg", 9909]
            ],
            "Johannesburg": [
                ["Durban", 9909],
                ["Cape Town", 9909]
            ]

        }

}