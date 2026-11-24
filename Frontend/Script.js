<script>
    const chat = document.getElementById('chat');
    const input = document.getElementById('msg');
    const sendBtn = document.getElementById('send');

    function addMessage(text, sender) {
      const div = document.createElement('div');
      div.className = sender === 'user' ? 'msg-user' : 'msg-jarvis';
      div.textContent = text;
      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;
    }

    function handleSend() {
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, 'user');
      input.value = '';

      setTimeout(() => {
        const lower = text.toLowerCase();
        let reply = "Command acknowledged. All primary systems operating within normal parameters.";
        if (lower.includes('time')) {
          reply = `Current local time is ${new Date().toLocaleTimeString()}.`;
        } else if (lower.includes('status')) {
          reply = "AI Core and Network are online. Voice and Memory modules remain locked.";
        }
        addMessage(reply, 'jarvis');
      }, 400);
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  </script>
</body>
</html>
