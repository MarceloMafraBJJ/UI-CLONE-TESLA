import React, { ReactNode } from "react";

export interface CarModel {
    modelName: string;
    overlayNode: ReactNode;
    wrapperRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>;
    registerModels: CarModel[];
    registerModel: (model: CarModel) => void;
    unregisterModel: (modelName: string) => void;
    getModelByName: (modelName: string) => CarModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext)