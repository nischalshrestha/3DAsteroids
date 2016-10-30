/* GLOBAL CONSTANTS AND VARIABLES */

// local copies of JSON files for testing (curently same as files from github)
var inputSpheres = [
// {"x": 0.25, "y": 0.25, "z": 0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.0,0.0], "specular": [0.3,0.3,0.3], "n":1},
// {"x": 0.25, "y": 0.75, "z": 0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [0.0,0.6,0.0], "specular": [0.3,0.3,0.3], "n":3},
// {"x": 0.75, "y": 0.75, "z": 0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [0.0,0.0,0.6], "specular": [0.3,0.3,0.3], "n":5},
// {"x": 0.75, "y": 0.25, "z": 0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.0,0.6], "specular": [0.3,0.3,0.3], "n":7},
// front
{"x": 0.5, "y": 0.5, "z": 0.5, "r":0.15, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.6,0.0], "specular": [0.3,0.3,0.3], "n":9},
// behind
{"x": 0.5, "y": 0.5, "z": -1.5, "r":0.15, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.6,0.0], "specular": [0.3,0.3,0.3], "n":9},
// right
{"x": 1.5, "y": 0.5, "z": -0.5, "r":0.15, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.6,0.0], "specular": [0.3,0.3,0.3], "n":9},
// left
{"x": -0.5, "y": 0.5, "z": -0.5, "r":0.15, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.6,0.0], "specular": [0.3,0.3,0.3], "n":9},
// above
{"x": 0.5, "y": 1.5, "z": -0.5, "r":0.15, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.6,0.0], "specular": [0.3,0.3,0.3], "n":9},
// below
{"x": 0.5, "y": -0.5, "z": -0.5, "r":0.15, "ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.6,0.0], "specular": [0.3,0.3,0.3], "n":9}
];

var missiles = [];
var missile = [
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9},
{"x": 0.5, "y": 0, "z": -0.5, "r":0.1, "ambient": [0.1,0.1,0.1], "diffuse": [1,1,1], "specular": [0.3,0.3,0.3], "n":9}
];
var ammo = missiles.length;

/* assignment specific globals */
const WIN_Z = 0;  // default graphics window z coord in world space
const WIN_LEFT = 0; const WIN_RIGHT = 1;  // default left and right x coords in world space
const WIN_BOTTOM = 0; const WIN_TOP = 1;  // default top and bottom y coords in world space
const INPUT_SPHERES_URL = "https://ncsucgclass.github.io/prog2/spheres.json"; // spheres file loc

/* Variables for the View, Light, and Reflectivity constants */
var Eye = new vec3.fromValues(0.5, 0.5, -0.5); // default eye position in world space
var Center = new vec3.fromValues(0.5, 0.5, 0); // default eye position in world space
var LookUp = new vec3.fromValues(0, 1.0, 0); // default eye position in world space
var LightLocation = new Float32Array([-2, -4, -5]); // Had to negate x,y and inc z to replicate solution
var LightColor = new Float32Array([1, 1, 1, 1]);
var AmbientR = new Float32Array([0.1, 0.1, 0.1]);
var SpecularR = new Float32Array([0.3, 0.3, 0.3]);

// TODO maintain the state for each object (Tri or Sphere) regarding its
// To highlight, set the selection's
// ambient and diffuse reflectivity to (0.5,0.5,0), specular to (0,0,0).
// To turn highlighting off, use normal lighting again.
var hSpecular = new Float32Array([0, 0, 0]);
var hAmbient = new Float32Array([0.5, 0.5, 0]);
var hDiffuse = new Float32Array([0.5, 0.5, 0]);

/* webgl globals */
var gl = null; // the all powerful gl object. It's all here folks!
var shaderProgram;

var spheres = [];

// ASSIGNMENT HELPER FUNCTIONS

// get the JSON file from the passed URL
function getJSONFile(url,descr) {
    try {
        if ((typeof(url) !== "string") || (typeof(descr) !== "string"))
            throw "getJSONFile: parameter not a string";
        else {
            var httpReq = new XMLHttpRequest(); // a new http request
            httpReq.open("GET",url,false); // init the request
            httpReq.send(null); // send the request
            var startTime = Date.now();
            while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
                if ((Date.now()-startTime) > 3000)
                    break;
            } // until its loaded or we time out after three seconds
            if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE))
                throw "Unable to open "+descr+" file!";
            else
                return JSON.parse(httpReq.response);
        } // end if good params
    } // end try

    catch(e) {
        console.log(e);
        return(String.null);
    }
} // end get input spheres

// set up the webGL environment
function setupWebGL() {

    // Get the canvas and context
    var canvas = document.getElementById("myWebGLCanvas"); // create a js canvas
    gl = canvas.getContext("webgl"); // get a webgl object from it

    try {
      if (gl == null) {
        throw "unable to create gl context -- is your browser gl ready?";
      } else {
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // use black when we clear the frame buffer
        gl.clearDepth(1.0); // use max when we clear the depth buffer
        gl.enable(gl.DEPTH_TEST); // use hidden surface removal (with zbuffering)
      }
    } // end try

    catch(e) {
      console.log(e);
    } // end catch
} // end setupWebGL

// setup the webGL shaders
function setupShaders() {

    // define fragment shader in essl using es6 template strings
    var fShaderCode = `
        precision mediump float;

        uniform float u_specular_coherence;

        uniform vec3 u_ambient;
        uniform vec3 u_specular;

        uniform vec4 u_color;
        uniform vec3 u_lighting_direction;

        varying vec4 v_color;
        varying vec3 v_normal;
        varying vec4 vPosition;

        void main(void) {
            // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // all fragments are white
            vec3 normal = normalize(v_normal);
            // lightNormal
            vec3 lightDirection = normalize(u_lighting_direction - vPosition.xyz);
            // eye
            vec3 eyeDirection = normalize(-vPosition.xyz);
            // R
            vec3 reflectionDirection = reflect(lightDirection, normal);
            float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);
            float specularLightWeighting =
              pow(max(dot(reflectionDirection, eyeDirection), 0.0), u_specular_coherence);
            gl_FragColor = v_color;

            // Caculate the color using Blinn-Phong shading
            // gl_FragColor.rgb *=
            //   u_ambient +
            //   diffuseLightWeighting +
            //   specularLightWeighting * u_specular;
        }
    `;

    // define vertex shader in essl using es6 template strings
    var vShaderCode = `
        attribute vec3 vertexPosition;
        attribute vec4 a_color;
        attribute vec4 h_color;
        attribute vec3 a_normal;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        uniform mat3 uNMatrix;

        varying vec4 v_color;
        varying vec3 v_normal;
        varying vec4 vPosition;

        uniform bool uIsTriangle;
        uniform bool uIsHighlighted;

        void main(void) {
            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
            // If highlighted use a different buffer from default color buffer
            if(uIsHighlighted){
              v_color = h_color;
            } else {
              v_color = a_color;
            }
            vPosition = uMVMatrix * vec4(vertexPosition, 1.0);
            v_normal = uNMatrix * a_normal;
        }
    `;

    try {
        // console.log("fragment shader: "+fShaderCode);
        var fShader = gl.createShader(gl.FRAGMENT_SHADER); // create frag shader
        gl.shaderSource(fShader,fShaderCode); // attach code to shader
        gl.compileShader(fShader); // compile the code for gpu execution

        // console.log("vertex shader: "+vShaderCode);
        var vShader = gl.createShader(gl.VERTEX_SHADER); // create vertex shader
        gl.shaderSource(vShader,vShaderCode); // attach code to shader
        gl.compileShader(vShader); // compile the code for gpu execution

        if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) { // bad frag shader compile
            throw "error during fragment shader compile: " + gl.getShaderInfoLog(fShader);
            gl.deleteShader(fShader);
        } else if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) { // bad vertex shader compile
            throw "error during vertex shader compile: " + gl.getShaderInfoLog(vShader);
            gl.deleteShader(vShader);
        } else { // no compile errors
            shaderProgram = gl.createProgram(); // create the single shader program
            gl.attachShader(shaderProgram, fShader); // put frag shader in program
            gl.attachShader(shaderProgram, vShader); // put vertex shader in program
            gl.linkProgram(shaderProgram); // link program into gl context
            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) { // bad program link
                throw "error during shader program linking: " + gl.getProgramInfoLog(shaderProgram);
            } else { // no shader program link errors
                gl.useProgram(shaderProgram); // activate shader program (frag and vert)
                shaderProgram.vertexPositionAttribute = // get pointer to vertex shader input
                    gl.getAttribLocation(shaderProgram, "vertexPosition");
                gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
                // find and enable the color attribute
                shaderProgram.vertexColorAttribute  = gl.getAttribLocation(shaderProgram, "a_color");
                gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute); // input to shader from array
                // find and enable the color attribute
                shaderProgram.vertexHighlightColorAttribute  = gl.getAttribLocation(shaderProgram, "h_color");
                gl.enableVertexAttribArray(shaderProgram.vertexHighlightColorAttribute); // input to shader from array
                // Add in the normal location to our program for lighting calculatio
                shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "a_normal");
                gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
               // Get uniform locations
                shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
                shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
                shaderProgram.nMatrixUniform = gl.getUniformLocation(shaderProgram, "uNMatrix");
                shaderProgram.colorUniform = gl.getUniformLocation(shaderProgram, "u_color");
                shaderProgram.useHighlightUniform = gl.getUniformLocation(shaderProgram, "uIsHighlighted");
                shaderProgram.ambientUniform = gl.getUniformLocation(shaderProgram, "u_ambient");
                shaderProgram.specularUniform = gl.getUniformLocation(shaderProgram, "u_specular");
                shaderProgram.specularCoherenceUniform = gl.getUniformLocation(shaderProgram, "u_specular_coherence");
                shaderProgram.lightingDirectionUniform = gl.getUniformLocation(shaderProgram, "u_lighting_direction");
            } // end if no shader program link errors
        } // end if no compile errors
    } // end try
    catch(e) {
        console.log(e);
    } // end catch
} // end setup shaders

var mvMatrix = mat4.create();
var pMatrix = mat4.create();

function loadMissiles()
{
  // var inputTriangles = getJSONFile(INPUT_TRIANGLES_URL,"triangles");
  // var inputSpheres = getJSONFile(INPUT_SPHERES_URL,"spheres");
  var xyz = [0,0,0];
  var rotate = [0,0,0];

  // if(inputSpheres != String.null){
    // var textureCoordData = [];
    var latitudeBands = 30;
    var longitudeBands = 30;
    for(var s = 0; s < missile.length; s++){
      // var xyz = new vec3.fromValues(0.5, 0.
      console.log("distance: "+JSON.stringify(xyz));
      var sCoordArray = [];
      var sColorArray = [];
      var sColorHighlightArray = [];
      var sIndexArray = [];
      var sNormalArray = [];
      var sphereBufferSize = 0;
      var sphere = missile[s];
      var radius = sphere.r;
      var coherence = sphere.n;
      for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
        var theta = latNumber * Math.PI / latitudeBands;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);
        for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
          var phi = longNumber * 2 * Math.PI / longitudeBands;
          var sinPhi = Math.sin(phi);
          var cosPhi = Math.cos(phi);
          var x = cosPhi * sinTheta;
          var y = cosTheta;
          var z = sinPhi * sinTheta;
          // var u = 1 - (longNumber / longitudeBands);
          // var v = 1 - (latNumber / latitudeBands);
          sNormalArray.push(x);
          sNormalArray.push(y);
          sNormalArray.push(z);
          // textureCoordData.push(u);
          // textureCoordData.push(v);
          sCoordArray.push(sphere.x - radius * x);
          sCoordArray.push(sphere.y - radius * y);
          sCoordArray.push(sphere.z - radius * z);
          // console.log(JSON.stringify([radius*x, radius*y, radius*z]));
          sColorArray.push(sphere.diffuse[0], sphere.diffuse[1], sphere.diffuse[2], 1.0);
          sColorHighlightArray.push(hDiffuse[0], hDiffuse[1], hDiffuse[2], 1.0);
        }
      }

      for (var latNumber=0; latNumber < latitudeBands; latNumber++) {
          for (var longNumber=0; longNumber < longitudeBands; longNumber++) {
              var first = (latNumber * (longitudeBands + 1)) + longNumber;
              var second = first + longitudeBands + 1;
              sIndexArray.push(first);
              sIndexArray.push(second);
              sIndexArray.push(first + 1);
              sIndexArray.push(second);
              sIndexArray.push(second + 1);
              sIndexArray.push(first + 1);
              sphereBufferSize += 6;
          }
      }

      // Sphere vertices
      var spherePositionBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sCoordArray);
      // Sphere indices
      var sphereIndexBuffer = createBindBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, sIndexArray);;
      // Sphere colors
      var sphereColorBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sColorArray);
      // Sphere highlight color
      var sphereHighlightColorBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sColorHighlightArray);
      // Sphere normals
      var sphereNormalBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sNormalArray);

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear frame/depth buffers

      var rotate = [0,0,0];
      // Projection and View transforms
      var newSphere = new Sphere(s, sphere.x, sphere.y, sphere.z, spherePositionBuffer, sphereIndexBuffer, sphereBufferSize, sphereNormalBuffer, sphereColorBuffer, sphereHighlightColorBuffer, AmbientR, SpecularR, coherence, false, mvMatrix, pMatrix, xyz, rotate);
      newSphere.draw = function()
      {
        // Projection and View transforms
        mat4.perspective(pMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100);
        mat4.identity(mvMatrix)
        mat4.lookAt(mvMatrix, Eye, Center, LookUp);

        // Do global transformation then the local
        var xyzTotal = new vec3.fromValues(this.xyz[0], this.xyz[1], this.xyz[2]);
        mat4.translate(this.pMatrix, this.pMatrix, xyzTotal);
        mat4.rotateX(pMatrix, pMatrix, rotateX);
        mat4.rotateY(pMatrix, pMatrix, rotateY);
        mat4.rotateZ(pMatrix, pMatrix, rotateZ);
        this.mvMatrix = mvMatrix;
        this.pMatrix = pMatrix;

        // console.log(JSON.stringify(mvMatrix));
        /* Vertex buffer: activate and feed into vertex shader */
        // set the light direction.
        gl.uniform4fv(shaderProgram.colorUniform, LightColor); // white light
        // Set the color to use
        gl.uniform3fv(shaderProgram.lightingDirectionUniform, LightLocation); // light location

        // Set default or hightlighted ambient, specular, diffuse Rs
        var amb = this.ambient;
        var spec = this.specular;
        if(this.highlighted){
          amb = hAmbient;
          spec = hSpecular;
          gl.uniform1i(shaderProgram.useHighlightUniform, true);
        } else{
          gl.uniform1i(shaderProgram.useHighlightUniform, false);
        }
        // console.log("color diff: "+diff);
        gl.uniform3fv(shaderProgram.ambientUniform, amb);
        gl.uniform3fv(shaderProgram.specularUniform, spec);
        // Set the specular coherence
        gl.uniform1f(shaderProgram.specularCoherenceUniform, this.coherence);

        // Position buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // Bind the color buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
        gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);

        // Bind the color buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, this.highlightBuffer);
        // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
        gl.vertexAttribPointer(shaderProgram.vertexHighlightColorAttribute, 4, gl.FLOAT, false, 0, 0);

        // Bind the normal buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0); // feed

        // Set the uniform vars for the projections and model-view
        var normalMatrix = mat3.create();
        setMatrixUniforms(this.mvMatrix, this.pMatrix, normalMatrix);

        // Finally, draw the elements.
        gl.uniform1i(shaderProgram.useTriangleUniform, false);
        gl.drawElements(gl.TRIANGLES, this.bufferSize, gl.UNSIGNED_SHORT, 0); // render
      };
      missiles.push(newSphere);
      ammo++;
    }
}

// read triangles in, load them into webgl buffers
function loadTriangles()
{
    // var inputTriangles = getJSONFile(INPUT_TRIANGLES_URL,"triangles");
    // var inputSpheres = getJSONFile(INPUT_SPHERES_URL,"spheres");
    var xyz = [0,0,0];
    var rotate = [0,0,0];

    // console.log("coordinates: "+coordArray.toString());
    // console.log("numverts: "+vtxBufferSize);
    // console.log("indices: "+indexArray.toString());
    // console.log("numindices: "+triBufferSize);

    /**

    Create meteors

    1. Generate spheres along x, y, z axes that are some d offset from eye that will collide
    2. Generate spheres along x, y, z axes that are some d offset from eye but isn't going to collide
    3. Randomize size of spheres from r = [0.08, 0.15]
    4. Randomize the axis chosen for the particular sphere (0-3 for front, behind, left, right, above, below)

    Logic for meteors

    1. Move meteors each second towards eye according to whichever axis they're on
    2. When meteors get some distance d close to the eye, signal a warning by flashing a red triangle (alpha to 0.5)

    **/

    // if(inputSpheres != String.null){
      // var textureCoordData = [];
      var latitudeBands = 30;
      var longitudeBands = 30;
      var numSpheres = 3;
      for(var s = 0; s < numSpheres; s++){
        var xyz = new vec3.fromValues(0.5, 0.5, -0.5);
        // Random xyz
        var direction = Math.round(getRandom(0, 6));
        // var direction = 0;
        // var distance = getRandom(2, 5);
        var distance = 10;
        console.log("direction: "+direction);
        console.log("distance: "+distance);
        switch (direction) {
          case states.FRONT:
            // hitable (concerns z)
            vec3.multiply(xyz, xyz, vec3.fromValues(1, 1, -1*distance*(s+1)));
            // unhitable (offset the x or y)
            // vec3.multiply(xyz, xyz, vec3.fromValues(1, 1, -1));
            break;
          case states.BEHIND:
            // hitable (concerns z)
            vec3.multiply(xyz, xyz, vec3.fromValues(1, 1, 1*distance*(s+1)));
            // unhitable (offset the x or y)
            // vec3.multiply(xyz, xyz, vec3.fromValues(1, 1, 1));
            break;
          case states.RIGHT:
          // hitable (min val for x < -1.0)
            vec3.multiply(xyz, xyz, vec3.fromValues(-1*distance*(s+1), 1, 1));
            // unhitable (offset the x or y)
            // vec3.multiply(xyz, xyz, vec3.fromValues(-1, 1, 1));
            break;
          case states.LEFT:
          // hitable (min val for x > 1.0)
            vec3.multiply(xyz, xyz, vec3.fromValues(1*distance*(s+1), 1, 1));
          // unhitable (min val for x > 1.0)
            break;
          case states.ABOVE:
          // hitable (min val for y > 1.0)
            vec3.multiply(xyz, xyz, vec3.fromValues(1, 1*distance*(s+1), 1));
            break;
          case states.BELOW:
            vec3.multiply(xyz, xyz, vec3.fromValues(1, -1*distance*(s+1), 1));
            break;
          default:
            console.log("unknown state!");
        }
        console.log("distance: "+JSON.stringify(xyz));
        var sCoordArray = [];
        var sColorArray = [];
        var sColorHighlightArray = [];
        var sIndexArray = [];
        var sNormalArray = [];
        var sphereBufferSize = 0;
        var sphere = inputSpheres[s];
        var radius = sphere.r;
        var coherence = sphere.n;
        for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
          var theta = latNumber * Math.PI / latitudeBands;
          var sinTheta = Math.sin(theta);
          var cosTheta = Math.cos(theta);
          for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
            var phi = longNumber * 2 * Math.PI / longitudeBands;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);
            var x = cosPhi * sinTheta;
            var y = cosTheta;
            var z = sinPhi * sinTheta;
            // var u = 1 - (longNumber / longitudeBands);
            // var v = 1 - (latNumber / latitudeBands);
            sNormalArray.push(x);
            sNormalArray.push(y);
            sNormalArray.push(z);
            // textureCoordData.push(u);
            // textureCoordData.push(v);
            sCoordArray.push(xyz[0] - radius * x);
            sCoordArray.push(xyz[1] - radius * y);
            sCoordArray.push(xyz[2] - radius * z);
            // console.log(JSON.stringify([radius*x, radius*y, radius*z]));
            sColorArray.push(sphere.diffuse[0], sphere.diffuse[1], sphere.diffuse[2], 1.0);
            sColorHighlightArray.push(hDiffuse[0], hDiffuse[1], hDiffuse[2], 1.0);
          }
        }

        for (var latNumber=0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber=0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                sIndexArray.push(first);
                sIndexArray.push(second);
                sIndexArray.push(first + 1);
                sIndexArray.push(second);
                sIndexArray.push(second + 1);
                sIndexArray.push(first + 1);
                sphereBufferSize += 6;
            }
        }

        // Sphere vertices
        var spherePositionBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sCoordArray);
        // Sphere indices
        var sphereIndexBuffer = createBindBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, sIndexArray);;
        // Sphere colors
        var sphereColorBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sColorArray);
        // Sphere highlight color
        var sphereHighlightColorBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sColorHighlightArray);
        // Sphere normals
        var sphereNormalBuffer = createBindBuffer(gl, gl.ARRAY_BUFFER, sNormalArray);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear frame/depth buffers

        var rotate = [0,0,0];
        // Projection and View transforms
        var newSphere = new Sphere(s, sphere.x, sphere.y, sphere.z, spherePositionBuffer, sphereIndexBuffer, sphereBufferSize, sphereNormalBuffer, sphereColorBuffer, sphereHighlightColorBuffer, AmbientR, SpecularR, coherence, false, mvMatrix, pMatrix, xyz, rotate);
        newSphere.draw = function()
        {
          // Projection and View transforms
          mat4.perspective(pMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100);
          mat4.identity(mvMatrix)
          mat4.lookAt(mvMatrix, Eye, Center, LookUp);

          // Do global transformation then the local
          var xyzTotal = new vec3.fromValues(this.xyz[0], this.xyz[1], this.xyz[2]);
          mat4.translate(this.pMatrix, this.pMatrix, xyzTotal);
          mat4.rotateX(pMatrix, pMatrix, rotateX);
          mat4.rotateY(pMatrix, pMatrix, rotateY);
          mat4.rotateZ(pMatrix, pMatrix, rotateZ);
          this.mvMatrix = mvMatrix;
          this.pMatrix = pMatrix;

          // console.log(JSON.stringify(mvMatrix));
          /* Vertex buffer: activate and feed into vertex shader */
          // set the light direction.
          gl.uniform4fv(shaderProgram.colorUniform, LightColor); // white light
          // Set the color to use
          gl.uniform3fv(shaderProgram.lightingDirectionUniform, LightLocation); // light location

          // Set default or hightlighted ambient, specular, diffuse Rs
          var amb = this.ambient;
          var spec = this.specular;
          if(this.highlighted){
            amb = hAmbient;
            spec = hSpecular;
            gl.uniform1i(shaderProgram.useHighlightUniform, true);
          } else{
            gl.uniform1i(shaderProgram.useHighlightUniform, false);
          }
          // console.log("color diff: "+diff);
          gl.uniform3fv(shaderProgram.ambientUniform, amb);
          gl.uniform3fv(shaderProgram.specularUniform, spec);
          // Set the specular coherence
          gl.uniform1f(shaderProgram.specularCoherenceUniform, this.coherence);

          // Position buffer
          gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
          gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

          // Bind the color buffer.
          gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
          // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
          gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);

          // Bind the color buffer.
          gl.bindBuffer(gl.ARRAY_BUFFER, this.highlightBuffer);
          // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
          gl.vertexAttribPointer(shaderProgram.vertexHighlightColorAttribute, 4, gl.FLOAT, false, 0, 0);

          // Bind the normal buffer.
          gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
          gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0); // feed

          // Set the uniform vars for the projections and model-view
          var normalMatrix = mat3.create();
          setMatrixUniforms(this.mvMatrix, this.pMatrix, normalMatrix);

          // Finally, draw the elements.
          gl.uniform1i(shaderProgram.useTriangleUniform, false);
          gl.drawElements(gl.TRIANGLES, this.bufferSize, gl.UNSIGNED_SHORT, 0); // render
        };
        spheres.push(newSphere);
      } // end spheres for
    // } // end spheres found

} // end load triangles

// render the loaded model
function drawScene() {
  // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear frame/depth buffers
    for(var s = 0; s < spheres.length; s++){
      spheres[s].setXYZ(x, y, z);
      // spheres[s].setRotate(rotateX, rotateY, rotateZ);
    }
    for(var s = 0; s < spheres.length; s++){
      spheres[s].draw();
    }
    if(fire)
    {
      missiles[0].setXYZ(x, y, missileZ);
      missiles[0].draw();
    }
} // end drawScene()

/** These global vars will keep track of the global transformations **/
var x = 0;
var y = 0;
var z = 0;
var rotateX = 0;
var rotateY = 0;
var rotateZ = 0;

function resetViewVars(){
  x = 0;
  y = 0;
  z = 0;
  rotateX = 0;
  rotateY = 0;
  rotateZ = 0;
}

var currentlyPressedKeys = {};
var currentlySelectedSphere = -1;
var sphereSelected = false;

function handleKeyDown(event) {
   currentlyPressedKeys[event.keyCode] = true;
   handleKeys();
}

function handleKeyUp(event) {
   currentlyPressedKeys[event.keyCode] = false;
}

function resetSpheres(){
  if(currentlySelectedSphere != -1){
    spheres[currentlySelectedSphere].setHighlighted(false);
  }
}

function handleKeys() {
  var resetView = false;
  var unselect = false;

  // Left and Right to switch weapons
  // Press Right
  if (event.keyCode == 39) {

  }
  // Press Left
  if (event.keyCode == 37) {

  }

  // Up and Down to hightlight/select the next sphere; we'll go clockwise
  if (event.keyCode == 38) { // Up
    if(currentlySelectedSphere == -1){
      currentlySelectedSphere = 0;
    } else if(currentlySelectedSphere < spheres.length - 1){
      resetSpheres();
      currentlySelectedSphere++;
    } else {
      resetSpheres();
      currentlySelectedSphere = 0;
    }
    sphereSelected = true;
  }

  if (event.keyCode == 40) { // Down
    if(currentlySelectedSphere == -1){
      currentlySelectedSphere = spheres.length - 1;
    } else if(currentlySelectedSphere > 0){
      resetSpheres();
      currentlySelectedSphere--;
    } else {
      resetSpheres();
      currentlySelectedSphere = spheres.length - 1;
    }
    sphereSelected = true;
  }

  // Backspace
  if(event.keyCode == 8){
  // resetLocalVars();
    console.log("reset");
  }
  var deg = 12;
  /** DEFAULT BEHAVIOR (no selection) **/
  if (String.fromCharCode(event.keyCode) == "W" && !event.shiftKey) {
    // Rotate forward on x
    // console.log("tilt backward");
    rotateX -= Math.PI / deg;
  }
  if (String.fromCharCode(event.keyCode) == "S" && !event.shiftKey) {
    // Go forward along x
    // console.log("tilt forward");
    rotateX += Math.PI / deg;
  }

  if (String.fromCharCode(event.keyCode) == "A" && !event.shiftKey) {
    // Rotate left along y
    // console.log("go left");
    rotateY -= Math.PI / deg;
  }
  if (String.fromCharCode(event.keyCode) == "D" && !event.shiftKey) {
    // Rotate right along y
    // console.log("go right");
    rotateY += Math.PI / deg;
  }

  // Fire with k
  if (String.fromCharCode(event.keyCode) == "K" && !event.shiftKey) {
    // Fire missile
    if(ammo > 0)
    {
      fire = true;
      missileZ = 0;
      ammo--;
    } else {
      fire = false;
    }
  }

  // Load with k
  if (String.fromCharCode(event.keyCode) == "L" && !event.shiftKey) {
    // Reload
    loadMissiles();
  }

  drawScene();
}

var fire = false;
var missileZ = 0;
var lastTime = 0;

function animate() {
    var timeNow = new Date().getTime();
    if (lastTime != 0) {
        var elapsed = timeNow - lastTime;
        // console.log("reset "+elapsed);
        if(elapsed > 10){
          z += 0.01;
          if(fire){
            missileZ -= 1;
          }
        }
    }
    lastTime = timeNow;
}

function tick() {
    requestAnimFrame(tick);
    drawScene();
    animate();
}

window.onkeydown = function(e) {
  return !(e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 40 && e.target == document.body);
};

/* MAIN -- HERE is where execution begins after window load */
function main() {
  setupWebGL(); // set up the webGL environment
  setupShaders(); // setup the webGL shaders (attribs)
  loadTriangles(); // load in the triangles from tri file (buffers)
  loadMissiles();
  drawScene(); // draw the triangles using webGL
  document.onkeydown = handleKeyDown;
  document.onkeyup = handleKeyUp;
  tick();
} // end main
