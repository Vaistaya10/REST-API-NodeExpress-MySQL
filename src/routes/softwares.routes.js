import { Router } from 'express';
import { 
  getSoftwares,
  createSoftwares,
  updateSoftwares, 
  deleteSoftwares, 
  getSoftwareById 
} from '../controllers/softwares.controller.js';

const router = Router(); 

// REST API = Verbos (GET-POST-PUT-DELETE-PATCH)
router.get('/softwares', getSoftwares)
router.get('/softwares/:id', getSoftwareById)
//Agregar nuevo registro
router.post('/softwares', createSoftwares)


router.put('/softwares/:id', updateSoftwares)

router.delete('/softwares/:id',deleteSoftwares)

export default router;

