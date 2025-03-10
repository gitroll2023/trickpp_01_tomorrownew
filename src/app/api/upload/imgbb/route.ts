import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File
    
    if (!image) {
      return NextResponse.json(
        { error: '이미지가 필요합니다.' },
        { status: 400 }
      )
    }

    // Convert the file to base64
    const buffer = await image.arrayBuffer()
    const base64Image = Buffer.from(buffer).toString('base64')

    // Upload to ImgBB
    const imgbbFormData = new FormData()
    imgbbFormData.append('image', base64Image)

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      {
        method: 'POST',
        body: imgbbFormData,
      }
    )

    if (!response.ok) {
      throw new Error('이미지 업로드에 실패했습니다.')
    }

    const data = await response.json()
    return NextResponse.json({ url: data.data.url })
  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json(
      { error: '이미지 업로드 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
