import { CourseManifestMaterial } from "./CourseManifestMaterial";
import { CurriculumContainer } from "./CurriculumContainer";

export interface CourseModuleManifest extends CurriculumContainer {
  material: CourseManifestMaterial[];
}
