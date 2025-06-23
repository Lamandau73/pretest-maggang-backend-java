package src.main.java.com.redostore.repository;

import com.redostore.model.Barang;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BarangRepository extends JpaRepository<Barang, Long> {
}
