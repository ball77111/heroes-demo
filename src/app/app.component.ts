import { PeriodicElement } from './interface/PeriodicElement ';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



const ELEMENT_DATA: any[] = [
  { positions: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { positions: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { positions: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { positions: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { positions: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { positions: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { positions: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { positions: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { positions: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { positions: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { positions: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { positions: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { positions: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { positions: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { positions: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { positions: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { positions: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { positions: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { positions: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { positions: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Tour of Heroes';
  @ViewChild('paginator') paginator!: MatPaginator
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // 資料丟入
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




  //   materData: any[] = [
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "相對濕度",
  //       "unit": "%",
  //       "monitoringSettingId": 2,
  //       "monitoringValue": 64.9,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "進水溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 3,
  //       "monitoringValue": 23.2,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "出水溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 4,
  //       "monitoringValue": 22.1,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "導電度",
  //       "unit": "µs/cm",
  //       "monitoringSettingId": 5,
  //       "monitoringValue": 672,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "PH值",
  //       "unit": "PH",
  //       "monitoringSettingId": 6,
  //       "monitoringValue": 8.67,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "濕球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 7,
  //       "monitoringValue": 20.2,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "趨近溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 8,
  //       "monitoringValue": 1.9,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "進出水溫差",
  //       "unit": "°C",
  //       "monitoringSettingId": 9,
  //       "monitoringValue": 1.1,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "TDS",
  //       "unit": "mg/L",
  //       "monitoringSettingId": 10,
  //       "monitoringValue": 343.73,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //     {
  //       "userName": "金像電子",
  //       "waterTowerNumber": "TR49",
  //       "machineCode": "49",
  //       "waterTowerName": "行政大樓冷卻水塔1",
  //       "waterTowerLocation": "24.981090, 121.233488",
  //       "waterTowerId": 440,
  //       "waterTowerDescription": "",
  //       "waterTowerNote": "TR-W3000S-1",
  //       "waterTowerAddress": "桃園市中壢區西園路113號",
  //       "waterTowerOnlineTimes": 1440,
  //       "monitoringSettingNameZH": "乾球溫度",
  //       "unit": "°C",
  //       "monitoringSettingId": 1,
  //       "monitoringValue": 25,
  //       "dateTime": "2022-05-25T13:47:13",
  //       "warning": 0,
  //       "warningRead": 0,
  //       "warningMessage": ""
  //     },
  //   ]

  //   // 資料長度
  //   length = this.materData.length;
  //   //是否隱藏顯示幾欄
  //   hidePageSize:boolean = false;
  //   // 可選擇顯示一次最多可以多少筆資料 1頁幾筆
  //   pageSize = 5;
  // // 第幾頁
  //   pageIndex = 0;
  //   // 可選擇 1頁幾筆  選擇式
  //   pageSizeOptions = [5, 10, 25];

  //   showFirstLastButtons = true;

  //   handlePageEvent(event: PageEvent) {
  //     console.log(event);
  //     this.length = this.materData.length;
  //     this.pageSize = event.pageSize;
  //     this.pageIndex = event.pageIndex;
  //   }


  ngOnInit(): void {

    // console.log(this.materData);
  }

}
