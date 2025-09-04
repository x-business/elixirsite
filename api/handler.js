// api/model.js
export default function handler(req, res) {
    console.log("req", req)
    const responseData = {
        data: {
            file: {
                model_file: "https://elixir-ai.pro/api/model/1wybzhqy6drj00cp70ybjkse74/generation-model_file.glb"
            }
        },
        preview: [
            "https://elixir-ai.pro/api/model/1wybzhqy6drj00cp70ybjkse74/preview-generator-file-1.png",
            "https://elixir-ai.pro/api/model/1wybzhqy6drj00cp70ybjkse74/preview-generator-file-2.png",
            "https://elixir-ai.pro/api/model/1wybzhqy6drj00cp70ybjkse74/preview-generator-file-3.png"
        ],
        id: "1wybzhqy6drj00cp70ybjkse74",
        share: "https://elixir-ai.pro/?model=1wybzhqy6drj00cp70ybjkse74"
    };

    res.status(200).json(responseData);
}
