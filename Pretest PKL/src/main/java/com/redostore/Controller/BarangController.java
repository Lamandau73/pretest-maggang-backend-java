package src.main.java.com.redostore.Controller;
@RestController
@RequestMapping("/api/barang")
@CrossOrigin(origins = "*")
public class BarangController {

    @Autowired
    private BarangRepository barangRepository;

    @GetMapping
    public List<Barang> getAll() {
        return barangRepository.findAll();
    }

    @PostMapping
    public Barang create(@RequestBody Barang barang) {
        return barangRepository.save(barang);
    }
}
