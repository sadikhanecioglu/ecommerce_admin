
import ThemeRtlLayout from './ThemeRtlLayout';


// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return (

        <ThemeRtlLayout>
          {children}
        </ThemeRtlLayout>

  );
}