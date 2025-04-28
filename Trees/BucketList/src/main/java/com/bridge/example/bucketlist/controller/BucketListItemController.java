package com.bridge.example.bucketlist.controller;

import com.bridge.example.bucketlist.entity.BucketListItems;
import com.bridge.example.bucketlist.service.BucketListItemsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/bucket")
public class BucketListItemController {

    private final BucketListItemsService bucketListItemsService;

    @GetMapping
    public ResponseEntity<List<BucketListItems>> getAllTasks() {
        List<BucketListItems> items = bucketListItemsService.getAllItems();
        return ResponseEntity.ok(items);
    }

    @PostMapping
    public ResponseEntity<BucketListItems> createTask(@RequestBody BucketListItems item){
        BucketListItems newItem = bucketListItemsService.createItem(item);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

}
