package com.predict.stock.ps.controller;

import com.predict.stock.ps.ApiResponse;
import com.predict.stock.ps.domain.StockPredictInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "GET")
public class ApiController {
    //소수점 2자리
    private static Map<String, StockPredictInfo> hashMap = new HashMap<>();

    @GetMapping
    public ApiResponse<StockPredictInfo> getPredictInfo(@RequestParam String stockCode) {

        if (hashMap.containsKey(stockCode)) return ApiResponse.ok(hashMap.get(stockCode));
        double randomValue = Double.parseDouble(String.format("%.2f", Math.random() * 100));

        while (randomValue < 20 || randomValue > 80) {
            randomValue = Math.random() * 100;
        }

        String variance = randomValue >= 50 ? "상승" : "하락";
        randomValue = randomValue >= 50 ? randomValue : 100 - randomValue;
        hashMap.put(stockCode, new StockPredictInfo(stockCode, randomValue, variance));
        return ApiResponse.ok(new StockPredictInfo(stockCode, randomValue, variance));
    }

    @GetMapping(value = "/{stockCode}")
    public ApiResponse<StockPredictInfo> getPredictInfo2(@PathVariable String stockCode) {

        if (hashMap.containsKey(stockCode)) return ApiResponse.ok(hashMap.get(stockCode));
        double randomValue = Double.parseDouble(String.format("%.2f", Math.random() * 100));

        while (randomValue < 20 || randomValue > 80) {
            randomValue = Math.random() * 100;
        }

        String variance = randomValue >= 50 ? "상승" : "하락";
        randomValue = randomValue >= 50 ? randomValue : 100 - randomValue;
        hashMap.put(stockCode, new StockPredictInfo(stockCode, randomValue, variance));
        return ApiResponse.ok(new StockPredictInfo(stockCode, randomValue, variance));
    }

}
