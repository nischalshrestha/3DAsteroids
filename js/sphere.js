// Sphere
function Sphere(
  id, x, y, z, positionBuffer, indexBuffer, bufferSize, normalBuffer, colorBuffer,
  highlightBuffer, ambient, specular, coherence, highlighted, mvMatrix, pMatrix,
  xyz, rotate)
{
  this.id = id;
  this.x = x;
  this.y = y;
  this.z = z;
  this.positionBuffer = positionBuffer;
  this.indexBuffer = indexBuffer;
  this.bufferSize = bufferSize;
  this.colorBuffer = colorBuffer;
  this.highlightBuffer = highlightBuffer;
  this.normalBuffer = normalBuffer;
  this.ambient = ambient;
  this.specular = specular;
  this.coherence = coherence;
  this.highlighted = highlighted;
  this.mvMatrix = mvMatrix;
  this.pMatrix = pMatrix;
  this.xyz = xyz;
  this.rotate = rotate;
  // Sets global xyz for translation
  this.setXYZ = function(x, y, z)
  {
    this.xyz = [x, y, z];
  };
  // Sets global xyz for rotate[XYZ]
  this.setRotate = function(x, y, z)
  {
    this.rotate = [x, y, z];
  };
  this.setHighlighted = function(highlighted)
  {
    this.highlighted = highlighted;
  };
}
