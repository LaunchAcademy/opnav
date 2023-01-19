import { CurriculumContainer } from "./CurriculumContainer";
import { CourseModuleManifest } from "./CourseModuleManifest";

export interface CourseManifest extends CurriculumContainer {
  modules: CourseModuleManifest[];
}
