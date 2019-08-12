export interface IColumnChartDataItem {
    color: string;
    person: string;
    values: [];
}

export interface IColumnChartData {
    categories: string[];
    data: IColumnChartDataItem[];
}
