import { createContext, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';
import { EleventyProps } from './index.js';

export const EleventyPropsContext = createContext<EleventyProps>(null);

export function withEleventyContext(
  Component: FunctionComponent<EleventyProps>,
) {
  return (props: EleventyProps) => {
    return (
      <EleventyPropsContext.Provider value={props}>
        <Component {...props} />
      </EleventyPropsContext.Provider>
    );
  };
}
export function useEleventytyProps(): EleventyProps {
  return useContext(EleventyPropsContext);
}
