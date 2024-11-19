export const inputFile = () => {
  const fileInput = document.getElementById('fileUpload');
  const fileLabel = document.getElementById('fileLabel');
 if (fileInput && fileLabel) {
  fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
      fileLabel.textContent = fileInput.files[0].name;
    } else {
      fileLabel.innerHTML = '<span>Файл не выбран</span>';
    }
  });

};
}
