// Resize Viewport
function resizeCanvas() {
  var c = document.getElementById("myWebGLCanvas");
  var newH = document.getElementById("height").value;
  var newW = document.getElementById("width").value;
  if(parseInt(newH, 10) > 1 && parseInt(newW, 10) > 1){
    c.height = newH;
    c.width = newW;
    drawScene();
  } else {
    alert("Please enter a valid height and width value!");
  }
}

// Set the matrix uniforms
function setMatrixUniforms(mvMatrix, pMatrix, normalMatrix) {
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
    mat3.normalFromMat4(normalMatrix, mvMatrix);
    gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, normalMatrix);
}
