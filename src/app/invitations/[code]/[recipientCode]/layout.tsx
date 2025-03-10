import Link from 'next/link'

export default function RecipientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <header className="flex justify-center py-4">
        <h1 className="text-2xl font-bold">
          모임초대장
        </h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
