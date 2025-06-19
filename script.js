const API_KEY = "METE_CLE_OPENAI_LA";

async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value;
  if (!message) return;

  chatBox.innerHTML += `<div><strong>Ou:</strong> message</div>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", 
    method: "POST",
    headers: 
      "Content-Type": "application/json",
      Authorization: `Bearer{API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  chatBox.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}