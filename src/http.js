export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
        // 400/500 errors
        throw (error = new Error("Failed to fetch places"));
    }

    return resData.places;
}