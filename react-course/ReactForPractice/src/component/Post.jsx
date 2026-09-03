const names = ["tariku", "negash"]

export default function Post() {
    const display = Math.random() > 0.5 ? names[0] : names[1]
    return (
        <div>Post
            {display}
        </div>
    )
}
