import { NextResponse } from 'next/server'

const IMGBB_API_KEY = process.env.IMGBB_API_KEY
const IMGBB_API_URL = 'https://api.imgbb.com/1/upload'

export async function POST(request: Request) {
  if (!IMGBB_API_KEY) {
    return NextResponse.json(
      { error: 'ImgBB API key is not configured' },
      { status: 500 }
    )
  }

  try {
    const formData = await request.formData()
    const image = formData.get('image') as File
    
    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    // 이미지를 base64로 변환
    const buffer = await image.arrayBuffer()
    const base64Image = Buffer.from(buffer).toString('base64')

    // ImgBB API로 이미지 업로드
    const imgbbFormData = new FormData()
    imgbbFormData.append('image', base64Image)

    const response = await fetch(`${IMGBB_API_URL}?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: imgbbFormData,
    })

    if (!response.ok) {
      throw new Error('Failed to upload image to ImgBB')
    }

    const result = await response.json()

    return NextResponse.json({
      url: result.data.url,
      deleteUrl: result.data.delete_url,
      displayUrl: result.data.display_url,
    })
  } catch (error) {
    console.error('Image upload failed:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}
