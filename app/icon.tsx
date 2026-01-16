import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const size = {
    width: 512,
    height: 512,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    const path = join(process.cwd(), 'public/favicon-source.png')
    const file = readFileSync(path)
    const base64 = file.toString('base64')
    const src = `data:image/png;base64,${base64}`

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'transparent',
                }}
            >
                <img
                    src={src}
                    width="100%"
                    height="100%"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
