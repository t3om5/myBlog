import "zenn-content-css"

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto mt-16 znc">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
