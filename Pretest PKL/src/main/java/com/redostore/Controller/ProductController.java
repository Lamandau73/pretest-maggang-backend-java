package src.main.java.com.redostore.Controller;

import com.redostore.model.Barang;
import com.redostore.repository.BarangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/barang")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private BarangRepository barangRepository;

    @GetMapping
    public List<Barang> getAll() {
        return barangRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Barang> getById(@PathVariable Long id) {
        Optional<Barang> barang = barangRepository.findById(id);
        return barang.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Barang> createBarang(@RequestBody Barang barang) {
        Barang saved = barangRepository.save(barang);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Barang> updateBarang(@PathVariable Long id, @RequestBody Barang updatedBarang) {
        return barangRepository.findById(id).map(barang -> {
            barang.setNama(updatedBarang.getNama());
            barang.setHarga(updatedBarang.getHarga());
            barang.setStok(updatedBarang.getStok());
            return ResponseEntity.ok(barangRepository.save(barang));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBarang(@PathVariable Long id) {
        if (barangRepository.existsById(id)) {
            barangRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
