export interface NavProps {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
}