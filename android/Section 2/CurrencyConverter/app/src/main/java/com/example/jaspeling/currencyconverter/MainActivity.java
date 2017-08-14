package com.example.jaspeling.currencyconverter;

import android.icu.math.BigDecimal;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.math.RoundingMode;

public class MainActivity extends AppCompatActivity {
    public double rate = 0.075;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void btnConvertClick(View view) {
        EditText txtAmount = (EditText) findViewById(R.id.txtAmount);
        double rand = Double.parseDouble(txtAmount.getText().toString());
        double dollar = 0.0;

        String result = String.format("%.2f", rand * 0.075);

        Toast.makeText(MainActivity.this, "R" + Double.toString(rand) + " = $" + result, Toast.LENGTH_LONG).show();
    }
}
