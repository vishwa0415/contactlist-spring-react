package com.tutorial.contactlistapi.service;

import com.tutorial.contactlistapi.domain.Contact;
import com.tutorial.contactlistapi.repo.ContactRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepo contactRepo;
    public Page<Contact> getAllContacts(int page, int size){
        return contactRepo.findAll(PageRequest.of(page,size, Sort.by("name")));
    }
    public Contact getContact(String id){
        return contactRepo.findById(id).orElseThrow(()->new RuntimeException("Contact not found"));
    }
    public Contact createContact(Contact contact){
        return contactRepo.save(contact);
    }

}
