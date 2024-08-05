import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Recipe Hunt",
    description: "Discover recipes with what's in your fridge"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;