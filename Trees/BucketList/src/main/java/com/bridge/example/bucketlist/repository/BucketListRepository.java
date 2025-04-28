package com.bridge.example.bucketlist.repository;
import com.bridge.example.bucketlist.entity.BucketListItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BucketListRepository extends JpaRepository<BucketListItems, Long> {

}
