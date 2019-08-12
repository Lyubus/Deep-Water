export interface IScatterChartData {
    categoriesMap: Map<number, string>;
    data: IScatterChartDataItem[];
}

export interface IScatterChartDataItem {
    actor: any;
    value: number;
    category: number;
}