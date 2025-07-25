import '../styles/downloads.css';

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className='downloads-layout'>
        {children}
      </div>
  );
}