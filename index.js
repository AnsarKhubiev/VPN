function copyText() {
    const field = document.getElementById("copyField");
    const toast = document.getElementById("toast");

    navigator.clipboard.writeText(field.value);

    // показать баннер
    toast.style.opacity = "1";

    // скрыть через 1.5 секунды
    setTimeout(() => {
        toast.style.opacity = "0";
    }, 1500);
}
