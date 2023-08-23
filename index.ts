import { compositionEcrPublicFlow } from "./src/flows";
import { baseFlow } from "./src/flows/baseFlow";

// Generate base
const baseResources = baseFlow();

// Generate free ecr public repository
compositionEcrPublicFlow({ usEastProvider: baseResources.usEastProvider });
