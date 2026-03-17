import type { RoleplayScenario } from "./types";
import { scenariosMarketing } from "./scenarios-marketing";
import { scenariosFinance } from "./scenarios-finance";
import { scenariosHospitality } from "./scenarios-hospitality";
import { scenariosBusinessManagement } from "./scenarios-business-management";
import { scenariosEntrepreneurship } from "./scenarios-entrepreneurship";
import { scenariosPersonalFinance } from "./scenarios-personal-finance";

export const allScenarios: RoleplayScenario[] = [
  ...scenariosMarketing,
  ...scenariosFinance,
  ...scenariosHospitality,
  ...scenariosBusinessManagement,
  ...scenariosEntrepreneurship,
  ...scenariosPersonalFinance,
];
