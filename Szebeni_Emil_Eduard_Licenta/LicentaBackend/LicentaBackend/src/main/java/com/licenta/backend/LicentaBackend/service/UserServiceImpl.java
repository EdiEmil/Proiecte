package com.licenta.backend.LicentaBackend.service;

import com.licenta.backend.LicentaBackend.models.DoctorSpital;
import com.licenta.backend.LicentaBackend.models.Role;
import com.licenta.backend.LicentaBackend.models.Trimitere;
import com.licenta.backend.LicentaBackend.models.User;
import com.licenta.backend.LicentaBackend.repository.DoctorSpitalRepository;
import com.licenta.backend.LicentaBackend.repository.TrimitereRepository;
import com.licenta.backend.LicentaBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired // daca nu folosim @Autowired avem nevoie de un constructor
    private UserRepository userRepository;

    @Autowired
    private TrimitereRepository trimitereRepository;

    @Autowired
    private DoctorSpitalRepository doctorSpitalRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        user.setCreateTime(LocalDateTime.now());

        return userRepository.save(user);
    }

    @Override
    public Optional<User> findByUsername(String username){

        return userRepository.findByUsername(username); // metoda este deja implementata in JPA Repository
    }

    @Override
    public Optional<Trimitere> updateDoctorDeTrimis(Trimitere trimitere1, String serie){

       Trimitere trimitere = trimitereRepository.findBySerie(serie);

        trimitere.setNumeDoctorDeTrimis(trimitere1.getNumeDoctorDeTrimis());
        trimitere.setPrenumeDoctorDeTrimis(trimitere1.getPrenumeDoctorDeTrimis());
        trimitere.setInstitutieDoctorDeTrimis(trimitere1.getInstitutieDoctorDeTrimis());

        final Trimitere trimitereActualizata = trimitereRepository.save(trimitere);

        return Optional.of(trimitereActualizata);
    }

    @Override
    public List<User> findUserById(Long id){

        return userRepository.findUserById(id);
    }

    @Override
    public List<DoctorSpital> findDoctorByLastName(String doctorLastName){
        return doctorSpitalRepository.findDoctorSpitalByLastName(doctorLastName);
    }

    @Override
    @Transactional
    public void updateDoctorForUser(String numeDoctorForUser,String prenumeDoctorFamilie ,Long userId){
        userRepository.updateDoctorForUser(numeDoctorForUser, prenumeDoctorFamilie ,userId);
    }

    @Override
    public List<User> findAllByNumeDoctorFamilie(String numeDoctorFamilie, String prenumeDoctorFamilie){
       return userRepository.findAllByNumeDoctorFamilieAndPrenumeDoctorFamilie(numeDoctorFamilie, prenumeDoctorFamilie);
    }

    @Override
    public void deleteUserById(Long userId){
        userRepository.deleteById(userId);
    }

//    @Override
//    @Transactional // ne trebuie cand facem un update sau delete
//    public  void changeRole(Role newRole, String username){
//
//        userRepository.updateUserRole(username, newRole);
//    }
}
