package com.bridge.example.bucketlist.service;
import com.bridge.example.bucketlist.entity.BucketListItems;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.bridge.example.bucketlist.repository.BucketListRepository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service

public class BucketListItemsService {

    private final BucketListRepository bucketListRepository;

    //Return all items
    public List<BucketListItems> getAllItems() {
        return bucketListRepository.findAll();
    }

    public BucketListItems createItem(BucketListItems item){
        return bucketListRepository.save(item);
    }
}
