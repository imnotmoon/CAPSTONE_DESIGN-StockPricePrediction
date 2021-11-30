package com.predict.stock.ps.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
public class StockPredictInfo {

    private String stockCode;
    private double percent;
    private String variation;

}
