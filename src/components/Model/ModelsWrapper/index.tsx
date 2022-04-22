import React, { ReactNode, useCallback, useRef, useState } from 'react';
import ModelsContext, { CarModel } from '../ModelsContext';

import ModelOverlay from '../ModelOverlay';

import { Container, OverlaysRoot } from './styles';
 
interface ModelsWrapperProps {
  children: ReactNode;
}

function ModelsWrapper({ children }: ModelsWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registerModels, SetRegisterModels] = useState<CarModel[]>([]);

  const registerModel = useCallback(
    (model: CarModel) => {
      SetRegisterModels(state => [...state, model]);
    }, []);

  const unregisterModel = useCallback(
    (modelName: string) => {
      SetRegisterModels(state => state.filter(model => model.modelName != modelName));
    }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return registerModels.find(item => item.modelName === modelName) || null;
    }, []);

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registerModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>

        <OverlaysRoot>
            {registerModels.map(item => (
              <ModelOverlay key={item.modelName} model={item}>
                {item.overlayNode}
              </ModelOverlay>
            ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
