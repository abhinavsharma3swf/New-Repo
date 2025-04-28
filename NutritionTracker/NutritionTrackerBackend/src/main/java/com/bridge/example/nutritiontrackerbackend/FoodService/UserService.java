package com.bridge.example.nutritiontrackerbackend.FoodService;

import com.bridge.example.nutritiontrackerbackend.Entity.UserEntity;
import com.bridge.example.nutritiontrackerbackend.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public UserEntity createUser(UserEntity userEntity){
        return userRepository.save(userEntity);
    }

    public UserEntity getUserById(Long id){
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }
}
