// Asteroid incoming directions enum
var states =
{
  FRONT: 0,
  BEHIND: 1,
  LEFT: 2,
  RIGHT: 3,
  ABOVE: 4,
  BELOW: 5
};

// Set the matrix uniforms
function setMatrixUniforms(mvMatrix, pMatrix, normalMatrix)
{
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
    mat3.normalFromMat4(normalMatrix, mvMatrix);
    gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, normalMatrix);
}

// Convenience function to create/bind buffer, supply data and return buffer
function createBindBuffer(gl, bufferType, array)
{
  var buffer;
  if(bufferType == gl.ARRAY_BUFFER){
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
  } else if(bufferType == gl.ELEMENT_ARRAY_BUFFER){ // only other we're using is ELEMENT_ARRAY_BUFFER but to be safe..
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(array), gl.STATIC_DRAW);
  }
  return buffer;
}



// Ray object that holds the origin (eye/camera) and the direction
// var Ray = function(origin, direction) {
//   this.origin = origin;
//   this.direction = direction;
// }

// Determines if the ray intersects given the radius and center of the sphere,
// and returns -1.0 if there are no intersections, or the intersection that is
// the closest
// function hit_sphere(sphere, ray)
// {
//     var oc = subtract(ray.origin, { x: sphere.x, y: sphere.y, z: sphere.z }); // E - C
//     var a = dot(ray.direction, ray.direction); // dot(D, D)
//     var b = 2.0 * dot(ray.direction, oc); // 2*dot(D, E-C)
//     var c = dot(oc, oc) - sphere.r*sphere.r; // dot(E-C, E-C) - R*R
//     var discriminant = b*b - 4*a*c;
//     if(discriminant > 0){
//       var rootA = (-b - Math.sqrt(discriminant)) / (2.0*a);
//       var rootB = (-b + Math.sqrt(discriminant)) / (2.0*a);
//       // return the smaller intersect point, t
//       return rootA < rootB ? rootA : rootB;
//     }
//     return -1.0;
// }

// Subtract vector a and b
function multiplyConstant(a, b)
{
  return { x: a.x*b, y: a.y*b, z: a.z*b};
}

// Returns a random number between min (inclusive) and max (exclusive)
function getRandom(min, max)
{
  return Math.random() * (max - min) + min;
}

// Resize Viewport
function resizeCanvas()
{
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
