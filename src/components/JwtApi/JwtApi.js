export const jwtApi = (currentUser, navigate, from) => {
  fetch("https://health-care-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("healthCare-token", data.token);
      navigate(from, { replace: true });
    });
};
