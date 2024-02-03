const apiKey = "live_ML6Ku4xlpV2XxsuzJjsJHWmHFmKaiLklleFqLeXwUaShM75eskc6NPUxu0SozNhT";
const apiUrl = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

export const fetchCatImages = async () => {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                "x-api-key": apiKey,
                "content-Type" : "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cat images:", error);
        return [];
    }
};