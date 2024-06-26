import { PageRequest } from "@/shared/types";

interface PromptsFilter {
    model: string;
    price: string;
}

export interface PromptsRequest extends PageRequest, PromptsFilter {}
