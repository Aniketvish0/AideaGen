const fetchBusinessIdeas = async (transcript) => {
    const apiKey = 'AIzaSyCiN0n9EaxtARz2dxrcqjVa69hJ6n8aX2w';  
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const requestBody = {
      "contents": [
        {
          "parts": [
            {
              "text": `From the following podcast transcript, generate potential business ideas with realistic cost, future scope, cost to run, and how to build: ${transcript}`
            }
          ]
        }
      ]
    };
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json(); 
    const generatedIdeas = data?.candidates?.[0]?.content?.parts?.[0] || 'No ideas generated';
    console.log(generatedIdeas);
    return generatedIdeas;
    
  };
export default fetchBusinessIdeas;