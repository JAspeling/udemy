package com.example.jaspeling.images;

import android.graphics.drawable.Drawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import static com.example.jaspeling.images.R.styleable.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button) (findViewById(R.id.button));

        ImageView image = (ImageView) findViewById(R.id.imgView);
        image.setTag(R.id.image, R.drawable.android1); //Set

//        final ImageView image = (ImageView)findViewById(R.id.imgView);
//        button.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Log.i("INFO", "Button Click Listener Hit");
//                int drawableId = (Integer)image.getTag();
//                switch(drawableId){
//                    case 0 : image.setTag(R.drawable.android1); break;
//                    case 1: image.setTag(R.drawable.android2); break;
//                    default: Log.i("INFO", "Using Default image... Drawable ID: '" + drawableId + "'");
//                }
//
//            }
//        });
    }

    boolean state = false;

    public void btnClick(View view) {
        Button button = (Button) (findViewById(R.id.button));
        ImageView image = (ImageView) findViewById(R.id.imgView);

        if (state)
            image.setImageResource(R.drawable.android1);
        else
            image.setImageResource(R.drawable.android2);

        state = !state;
    }
}
