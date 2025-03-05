document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 기본 제출 방지

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
  }).then(response => {
      if (response.ok) {
          alert("✅ 정상적으로 전송되었습니다.");
          form.reset();
      } else {
          alert("❌ 문제가 발생했습니다.");
      }
  }).catch(error => {
      alert("❌ 문제가 발생했습니다.");
  });
});